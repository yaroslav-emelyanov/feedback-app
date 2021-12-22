<script lang="ts">
   import {FeedbackStore} from '../stores';

   $: count = $FeedbackStore.length;
   $: average = $FeedbackStore.reduce((acc, { rating }) => acc + rating, 0) / count
   
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