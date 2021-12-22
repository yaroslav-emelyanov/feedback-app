<script lang="ts">
    import { scale, fade } from 'svelte/transition'

    import {feedbackList} from '../stores';
    import FeedbackItem from './FeedbackItem.svelte';

</script>

{#each $feedbackList as item (item.id)}
  <div in:scale out:fade>
    <FeedbackItem {item} />
</div>
{/each}