<template>
    <header>
        <nav class="navbar sticky-top navbar-expand-xl navbar-dark bg-success pt-0 pb-0 row" id="main-navbar">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="/" role="button" class="btn btn-outline-light d-xl-none"><span @click="isNavbarVisible = false"><font-awesome-icon icon="home" class=""/></span></router-link>
                    <span class="d-xl-none"> / {{ activeTab }}</span>
                    <router-link to="/" class="d-none d-xl-block text-white navbar-brand">yaaann</router-link>
                </div>
                
                <button 
                        class="navbar-toggler" 
                        type="button" 
                        @click="isNavbarVisible = !isNavbarVisible">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" :class="{show: isNavbarVisible}">
                    <ul class="navbar-nav ml-auto mt-3" @mouseleave="isAdminVisible = false">
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top text-nowrap" :to="{name: 'home'}" active-class="custom-active" exact>
                                <font-awesome-icon icon="home" class="mr-2 d-md-none d-xl-inline"/>
                                ACCUEIL
                            </router-link>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top" :to="{name: 'skills'}" active-class="custom-active">COMPETENCES</router-link>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top" :to="{name: 'educations'}" active-class="custom-active">FORMATION</router-link>
                        </li> 
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top" :to="{name: 'experiences'}" active-class="custom-active">EXPERIENCES</router-link>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top" :to="{name: 'portfolio'}" active-class="custom-active">PORTFOLIO</router-link>
                        </li> 
                        <li class="nav-item" @click="isNavbarVisible = false">
                            <router-link class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top" :to="{name: 'contact'}" active-class="custom-active">CONTACT</router-link>
                        </li>
                        <li class="nav-item pl-3 xl-pl-0 pb-xl-3 d-flex" @click="isNavbarVisible = false">
                            <a href="https://www.linkedin.com/in/yanntachier/" target="_blank" class="nav-link active mr-3 xl-mr-0"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
                            <a href="https://github.com/yaaann-bzh" target="_blank" class="nav-link active mr-2 xl-mr-0"><font-awesome-icon :icon="['fab', 'github-alt']"/></a>
                        </li>
                        <li class="nav-item dropdown d-none d-xl-inline" @click="isNavbarVisible = false" v-if="isAuthenticated">
                           <a  
                                    href="#"
                                    class="nav-link dropdown-toggle custom-active pr-3 pl-3 pb-xl-3 rounded-top" 
                                    role="button"
                                    @click="isAdminVisible = !isAdminVisible"
                                    id="navbarDropdown">
                                <font-awesome-icon :icon="['fas', 'user-cog']"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" :class="{show: isAdminVisible}" :style="{ right: 0 }">
                                <router-link class="dropdown-item" :to="{name: 'admin'}">Administration</router-link>
                                <a class="dropdown-item" href="#" @click="logout">Se déconnecter</a>
                            </div>
                        </li>
                        <li class="nav-item d-xl-none" @click="isNavbarVisible = false" v-if="isAuthenticated">
                            <router-link class="nav-link active pr-3 pl-3 rounded d-xl-none" :to="{name: 'admin'}" active-class="custom-active">Administration</router-link>
                            <a href="#" class="nav-link active pr-3 pl-3 pb-3 rounded d-xl-none" @click="logout">Se déconnecter</a>
                        </li>
                        <li class="nav-item" @click="isNavbarVisible = false" v-else>
                            <router-link 
                                    class="nav-link active pr-3 pl-3 pb-xl-3 rounded-top" 
                                    :to="{name: 'login'}" 
                                    active-class="custom-active">
                                <font-awesome-icon icon="user-lock"/>
                                <span class="ml-2 d-xl-none">administration</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            isNavbarVisible: false,
            isAdminVisible: false
        }
    },
    methods: {
        ...mapActions({
            logout: 'logout'
        })
    },
	computed: {
        ...mapGetters({
            isAuthenticated: 'isAuthenticated',
            activeTab: 'activeTab'
        })
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