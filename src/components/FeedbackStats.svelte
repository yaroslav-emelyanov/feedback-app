<script lang="ts">
   import {feedbackList} from '../stores';

   $: count = $feedbackList.length;
   $: average = $feedbackList.reduce((acc, { rating }) => acc + rating, 0) / count
   
</script>

<div class="feedback-stats">
    <h4>Reviews: {count}</h4>
    <h4>Rating average: {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>