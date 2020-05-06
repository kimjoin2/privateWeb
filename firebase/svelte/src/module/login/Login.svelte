<script>
    import {onMount} from 'svelte';
    import {setCookie, removeCookie} from '../../library/utils.js';

    export let auth;

    let id;
    let pw;

    function login(){
        console.log(auth, id, pw);
    }

    onMount(async () => {
        removeCookie(auth);
    })

</script>

<div class="top">
    <div class="center-container">
        <div class="text-center margin-bottom-15">
            <h2>나만 쓸꺼임</h2>
        </div>
        <div class="horizontal-container margin-bottom-15">
            <span class="input-title">id : </span>
            <label class="width-100">
                <input class="width-100" type="text" bind:value={id} />
            </label>
        </div>
        <div class="horizontal-container margin-bottom-15">
            <div class="input-title">pw : </div>
            <label class="width-100">
                <input class="width-100" type="password" bind:value={pw} />
            </label>
        </div>
        <div class="button-container">
            <button class="btn btn-primary" on:click={login} >OK</button>
        </div>
    </div>
</div>

<style>
    .input-title {
        width: 40px;
        min-width: 40px;
    }
    .center-container {
        min-width: 220px;
        max-width: 320px;
        width: 50%;
        margin: auto;
        border: 2px solid #dddddd;
        padding: 25px;
        border-radius: 15px;
    }
    .top {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .margin-bottom-15 {
        margin-bottom: 15px;
    }
    .button-container {
        display: flex;
        flex-direction: row-reverse;
    }
</style>
