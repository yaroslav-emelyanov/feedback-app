<script lang="ts">
  import {createEventDispatcher} from 'svelte'

  const RATING_NUMBER = 10;
  const RATING_LIST = new Array(RATING_NUMBER).fill('_').map((_, index) => index + 1);

  let selected = 10

  const dispatch = createEventDispatcher()

  const onChange = (e: any) => {
    selected = e.currentTarget.value
    dispatch('rating', selected)
  }

</script>

<ul class="rating">
    {#each RATING_LIST as rating (rating)}
    <li>
        <input type="radio" id={`num${rating}`} name="rating" value={rating} on:change={onChange} checked={selected === rating} />
        <label for={`num${rating}`}>{rating}</label>
      </li>
    {/each}
  </ul>


  <style>
    .rating {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 30px 0;
    }
    .rating li {
      position: relative;
      background: #f4f4f4;
      width: 50px;
      height: 50px;
      padding: 10px;
      text-align: center;
      border-radius: 50%;
      font-size: 19px;
      border: 1px #eee solid;
      transition: 0.3s;
    }
    .rating li label {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    .rating li:hover {
      background: #ff6a95;
      color: #fff;
    }
    /* Make actual radio select invisible */
    [type='radio'] {
      opacity: 0;
    }
    /* Use the sibling select */
    [type='radio']:checked ~ label {
      background: #ff6a95;
      color: #fff;
    }
  </style>
  