<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">28</span>
            <span class="mx-1 fs-5 fw-light">Septiembre</span>
            <span class="mx-1 fs-5 fw-light">2023</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt deleniti quas, necessitatibus nobis minus nemo sequi optio? Neque ex enim praesentium amet dignissimos odio quod, odit exercitationem ratione quas.
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2ce360;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;

    }

    .entry-description {
        font-size: 12px;
    }

}

</style>