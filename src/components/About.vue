<script setup lang="ts">
import { ref } from 'vue';

let swashOut = ref(false)
let swashIn = ref(false)

const clicks = () => {
    swashOut.value = true
    swashIn.value = true

    setTimeout(() => {
        swashOut.value = false
    }, 800)

    setTimeout(() => {
        swashIn.value = false
    }, 1600)
};

</script>

<template>
    <div class="about">
        <div class="logo" @click="clicks" :class="{'swashOut': swashOut, 'swashIn': swashIn}">
            <span class="grape">🍇</span>
            <span class="cantaloupe">🍈</span>
            <span class="orange">🍊</span>
            <span class="lemon">🍋</span>
            <span class="pear">🍐</span>
            <span class="peach">🍑</span>
            <span class="green-apple">🍏</span>
            <span class="red-apple">🍎</span>
            <span class="mango">🥭</span>
            <span class="pineapple">🍍</span>
            <span class="cherry">🍒</span>
            <span class="strawberry">🍓</span>

            <span class="herisson">🦔</span>

            <span class="tomato">🍅</span>
            <span class="carrot">🥕</span>
            <span class="green-pepper">🫑</span>
            <span class="caterpillar">🐛</span>
            <span class="snail">🐌</span>
            <span class="worm">🪱</span>
            <span class="cricket">🦗</span>
            <span class="beetle">🪲</span>
            <span class="cockchafer">🐞</span>
            <span class="fluttering-leaves">🍃</span>
            <span class="fallen-leaves">🍂</span>
        </div>
    </div>
</template>

<style lang="scss">
.about {
    .logo {
        cursor: pointer;
        padding: 60px;
        width: 160px;
        height: 160px;
        user-select: none;

        -webkit-animation-duration: 1s;
        animation-duration: 0.8s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;

        .grape {
            display: inline-block;
            position: relative;
            transform: rotate(42deg);
            bottom: 20px;
            left: 48px;
            font-size: 1.2rem;
        }

        .cantaloupe {
            display: inline-block;
            position: relative;
            transform: rotate(42deg);
            top: 20px;
            right: 48px;
        }

        .orange {
            display: inline-block;
            position: relative;
            bottom: 20px;
            right: 48px;
        }

        .lemon {
            display: inline-block;
            position: relative;
            transform: rotate(160deg);
            top: 20px;
            right: 48px;
            font-size: .8rem;
        }

        .pear {
            display: inline-block;
            position: relative;
            transform: rotate(42deg);
            top: 20px;
            right: 48px;
            font-size: 1.2rem;
        }

        .peach {
            display: inline-block;
            position: relative;
            transform: rotate(48deg);
            top: 20px;
            right: 48px;
            font-size: .8rem;
        }

        .green-apple {
            display: inline-block;
            position: relative;
            transform: rotate(-40deg);
            top: 20px;
            right: 48px;
        }

        .red-apple {
            display: inline-block;
            position: relative;
            transform: rotate(-40deg);
            top: 20px;
            right: 48px;
        }

        .mango {
            display: inline-block;
            position: relative;
            transform: rotate(48deg);
            bottom: 20px;
            right: 48px;
            font-size: 0.8rem;
        }

        .pineapple {
            display: inline-block;
            position: relative;
            transform: rotate(-40deg);
            top: 20px;
            right: 48px;
        }

        .cherry {
            display: inline-block;
            position: relative;
            transform: rotate(-40deg);
            bottom: 20px;
            right: 48px;
        }

        .strawberry {
            display: inline-block;
            position: relative;
            transform: rotate(-40deg);
            top: 20px;
        }

        .herisson {
            font-size: 3rem;
        }

        .tomato {
            display: inline-block;
            position: relative;
            transform: rotate(70deg);
            bottom: 20px;
        }

        .carrot {
            display: inline-block;
            position: relative;
            right: 20px;
        }

        .green-pepper {
            display: inline-block;
            position: relative;
            transform: rotate(-40deg);
            bottom: 20px;
        }

        .caterpillar {
            display: inline-block;
            position: relative;
            top: 20px;
            right: 48px;
            font-size: .6rem;
        }

        .snail {
            display: inline-block;
            position: relative;
            transform: rotate(24deg);
            top: 20px;
            right: 48px;
            font-size: .8rem;
        }

        .worm {
            display: inline-block;
            position: relative;
            transform: rotate(40deg);
            top: 48px;
        }

        .cricket {
            display: inline-block;
            position: relative;
            transform: rotate(32deg);
            top: 12px
        }

        .beetle {
            display: inline-block;
            position: relative;
            transform: rotate(-16deg);
            font-size: .6rem;
        }

        .cockchafer {
            display: inline-block;
            position: relative;
            transform: rotate(28deg);
            top: 20px;
            right: 48px;
            font-size: .6rem;
        }

        .fluttering-leaves {
            display: inline-block;
            position: relative;
            transform: rotate(40deg);
        }

        .fallen-leaves {
            display: inline-block;
            position: relative;
            border: 20px;
            font-size: .8rem;
        }
    }


    .swashIn {
        -webkit-animation-name: swashIn;
        animation-name: swashIn;
    }

    @-webkit-keyframes swashIn {
        0% {
            opacity: 0;
            transform: scale(0);
            transform-origin: 50% 50%;
        }

        90% {
            opacity: 1;
            transform: scale(0.9);
            transform-origin: 50% 50%;
        }

        to {
            opacity: 1;
            transform: scale(1);
            transform-origin: 50% 50%;
        }
    }

    @keyframes swashIn {
        0% {
            opacity: 0;
            transform: scale(0);
            transform-origin: 50% 50%;
        }

        90% {
            opacity: 1;
            transform: scale(0.9);
            transform-origin: 50% 50%;
        }

        to {
            opacity: 1;
            transform: scale(1);
            transform-origin: 50% 50%;
        }
    }

    .swashOut {
        -webkit-animation-name: swashOut;
        animation-name: swashOut;
    }

    @-webkit-keyframes swashOut {
        0% {
            opacity: 1;
            transform: scale(1);
            transform-origin: 50% 50%;
        }

        80% {
            opacity: 1;
            transform: scale(0.9);
            transform-origin: 50% 50%;
        }

        to {
            opacity: 0;
            transform: scale(0);
            transform-origin: 50% 50%;
        }
    }

    @keyframes swashOut {
        0% {
            opacity: 1;
            transform: scale(1);
            transform-origin: 50% 50%;
        }

        80% {
            opacity: 1;
            transform: scale(0.9);
            transform-origin: 50% 50%;
        }

        to {
            opacity: 0;
            transform: scale(0);
            transform-origin: 50% 50%;
        }
    }
}
</style>
