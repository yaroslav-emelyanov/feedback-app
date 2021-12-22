<script lang="ts">
  import { createFeedbackFx } from "../stores"
  import type { Feedback } from '../shared/types'
  
  import Card from "./Card.svelte";
  import Button from "./Button.svelte"
  import RatingSelect from "./RatingSelect.svelte";

const MIN_LENGTH = 4

   let text = '';
   let rating = 10;
   let submitDisabled = true;
   let message: string | null = null;

   const handleInput = () => {
       if (text.trim().length <= MIN_LENGTH) {
        message = `Text must be at least ${MIN_LENGTH} characters`
        submitDisabled = true;
       } else {
        message = null;
        submitDisabled = false;
       }

   }

   const handleRating = (e: CustomEvent<string>) => {
     rating = Number(e.detail);
   }

   const handleSubmit = async () => {
       const feedback: Feedback = { id: Date.now(), rating, text };

       await createFeedbackFx(feedback);

       text = '';
       submitDisabled = true;
   }

  let loading = createFeedbackFx.pending;
</script>

<Card>
    <form on:submit|preventDefault={handleSubmit}>
        <header>
            <h2>How would you rate your service with us?</h2>
          </header>
          
     <RatingSelect on:rating={handleRating} />
    
     <div class="input-group">
         <input on:input={handleInput} bind:value={text} type="text" placeholder="Tell us something that keeps you comming back" disabled={$loading}>
         <Button type="submit" disabled={submitDisabled || $loading} >
          {#if $loading}
          Loading...
          {:else}
          send
         {/if}
        </Button>
     </div>
     {#if message}
     <div class="message">{message}</div>
     {/if}
    </form>
</Card>


<style>
    header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>