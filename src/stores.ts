import { createEvent, createStore, createEffect } from "effector";
import { writable } from "svelte/store";

import type { Feedback } from "./shared/types";
import { sleep } from "./shared/utils";

export const FeedbackStore = writable<Feedback[]>([
  {
    id: 1,
    rating: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis at aliquid fuga!",
  },
  {
    id: 2,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in enim eligendi aut tempora minus sint consequuntur, illum et quia, ex nulla alias inventore culpa dolorem deleniti deserunt. Quam explicabo amet rerum!",
  },
  {
    id: 3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla alias inventore culpa dolorem deleniti deserunt. Quam explicabo amet rerum!",
  },
]);

export const createFeedbackFx = createEffect(async (feedback: Feedback) => {
  await sleep(500);

  return feedback;
});

export const deleteFeedback = createEvent<number>();

export const feedbackList = createStore<Feedback[]>([
  {
    id: 1,
    rating: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis at aliquid fuga!",
  },
  {
    id: 2,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in enim eligendi aut tempora minus sint consequuntur, illum et quia, ex nulla alias inventore culpa dolorem deleniti deserunt. Quam explicabo amet rerum!",
  },
  {
    id: 3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla alias inventore culpa dolorem deleniti deserunt. Quam explicabo amet rerum!",
  },
])
  .on(createFeedbackFx.doneData, (prevList, item) => [item, ...prevList])
  .on(deleteFeedback, (prevList, id) =>
    prevList.filter((item) => item.id !== id)
  );
