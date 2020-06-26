<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-success pt-0 pb-0">
            <div class="container">
                <router-link class="navbar-brand" to="/">yaaann</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headernavbar" aria-controls="headernavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="headernavbar">
                    <ul class="navbar-nav ml-auto mt-3">
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 pb-3 rounded-top" to="/" active-class="custom-active" exact><font-awesome-icon icon="home" class="mr-2"/>ACCUEIL</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 pb-3 rounded-top" to="/competences" active-class="custom-active">COMPETENCES</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 pb-3 rounded-top" to="/formations" active-class="custom-active">FORMATION</router-link>
                        </li> 
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 pb-3 rounded-top" to="/experiences" active-class="custom-active">EXPERIENCES</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active pr-4 pl-4 pb-3 rounded-top" to="/portfolio" active-class="custom-active">PORTFOLIO</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.linkedin.com/in/yanntachier/" target="_blank" class="nav-link active"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/yaaann-bzh" target="_blank" class="nav-link active"><font-awesome-icon :icon="['fab', 'github-alt']"/></a>
                        </li>
                        <li class="nav-item">
                            <a href="mailto:yann.tachier@gmail.com" target="_blank" class="nav-link active"><font-awesome-icon :icon="['far', 'envelope']"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    </div>
</template>

<script>
export default {

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