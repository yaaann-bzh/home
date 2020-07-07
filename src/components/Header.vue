<template>
    <header>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-success pt-0 pb-0 row" id="main-navbar">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="/" role="button" class="btn btn-outline-light d-lg-none"><span @click="isNavbarVisible = false"><font-awesome-icon icon="home" class=""/></span></router-link>
                    <span class="d-lg-none"> / {{ activeTab }}</span>
                    <router-link to="/" class="d-none d-lg-block text-white">yaaann</router-link>
                </div>
                
                <button 
                        class="navbar-toggler" 
                        type="button" 
                        @click="isNavbarVisible = !isNavbarVisible">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" :class="{show: isNavbarVisible}">
                    <ul class="navbar-nav ml-auto mt-3">
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-4 pl-4 pb-lg-3 rounded-top text-nowrap" to="/" active-class="custom-active" exact><font-awesome-icon icon="home" class="mr-2 d-md-none d-lg-inline"/>ACCUEIL</router-link>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-4 pl-4 pb-lg-3 rounded-top" to="/competences" active-class="custom-active">COMPETENCES</router-link>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-4 pl-4 pb-lg-3 rounded-top" to="/formations" active-class="custom-active">FORMATION</router-link>
                        </li> 
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-4 pl-4 pb-lg-3 rounded-top" to="/experiences" active-class="custom-active">EXPERIENCES</router-link>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-4 pl-4 pb-lg-3 rounded-top" to="/portfolio" active-class="custom-active">PORTFOLIO</router-link>
                        </li>
                        <li class="nav-item pl-4 lg-pl-0 pb-lg-3 d-flex" @click="isNavbarVisible = false">
                            <a href="https://www.linkedin.com/in/yanntachier/" target="_blank" class="nav-link active mr-3 lg-mr-0"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
                            <a href="https://github.com/yaaann-bzh" target="_blank" class="nav-link active mr-3 lg-mr-0"><font-awesome-icon :icon="['fab', 'github-alt']"/></a>
                            <a href="mailto:yann.tachier@gmail.com" target="_blank" class="nav-link active mr-3 lg-mr-0"><font-awesome-icon :icon="['far', 'envelope']"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isNavbarVisible: false
        }
    },
    computed: {
        activeTab() {
            let path = this.$route.path.charAt(1).toUpperCase() + this.$route.path.substring(2)
            return path.indexOf('/') > 0 ? path.substring(0, path.indexOf('/')) : path;
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
}
.custom-active {
    background-color: white;
    color: #28a745 !important;
}

</style>