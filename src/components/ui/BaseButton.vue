<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
    font-size: 2rem;
    padding: 1rem 2.4rem 1rem 2.4rem;
    border-radius: 11px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

button:hover,
button:active {
  box-shadow: 0 0 2px 2px #ddd;
  transition: all 0.3s ease;
}


@media (max-width: 62em) {
    button {
        font-size: 1.6rem;
        padding: 1rem 1.5rem 1rem 1.5rem;
    }
}

@media (max-width: 37.5em) {
    button {
        font-size: 1.6rem;
        padding: 0.7rem 1rem 0.7rem 1rem;
    }
}
</style>