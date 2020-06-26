<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-success pt-0 pb-0">
            <div class="container">
                <router-link class="navbar-brand" to="/">yaaann</router-link>
                <button 
                        class="navbar-toggler" 
                        type="button" 
                        @click="isNavbarVisible = !isNavbarVisible">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" :class="{show: isNavbarVisible}">
                    <ul class="navbar-nav ml-auto mt-3">
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 lg-pb-4 rounded-top" to="/" active-class="custom-active" exact><font-awesome-icon icon="home" class="mr-2"/>ACCUEIL</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 lg-pb-4 rounded-top" to="/competences" active-class="custom-active">COMPETENCES</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 lg-pb-4 rounded-top" to="/formations" active-class="custom-active">FORMATION</router-link>
                        </li> 
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 lg-pb-4 rounded-top" to="/experiences" active-class="custom-active">EXPERIENCES</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 lg-pb-4 rounded-top" to="/portfolio" active-class="custom-active">PORTFOLIO</router-link>
                        </li>
                        <li class="nav-item pl-4 lg-pl-0 lg-pb-4 d-flex">
                            <a href="https://www.linkedin.com/in/yanntachier/" target="_blank" class="nav-link active mr-3 lg-mr-0"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
                            <a href="https://github.com/yaaann-bzh" target="_blank" class="nav-link active mr-3 lg-mr-0"><font-awesome-icon :icon="['fab', 'github-alt']"/></a>
                            <a href="mailto:yann.tachier@gmail.com" target="_blank" class="nav-link active mr-3 lg-mr-0"><font-awesome-icon :icon="['far', 'envelope']"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isNavbarVisible: false
        }
    }
}
</script>

<style scoped>
.navbar-brand {
    font-size: 24px;
    letter-spacing: 0.6;
}
.nav-link {
    font-size: 14px;
    letter-spacing: 0.6;
    height: 100%;
    /* padding: 8px 24px 16px 24px; */
}
.custom-active {
    background-color: white;
    color: #28a745 !important;
}

</style>