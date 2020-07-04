<template>
	<div>
		<h3 class="text-center text-md-left"><slot name="title"></slot></h3>
		<div class="d-flex flex-wrap m-3 align-center">
			<p class="col-12 col-md p-0 mt-2 mb-2">
				<a :href="url" v-if="url" class="btn btn-primary" role="button" target="_blank">
					Accéder au site
					<font-awesome-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"/>
				</a>
			</p>
			<p v-if="github || gitlab" class="ml-auto mt-2 mb-2 text-right col-12 col-md p-0">
				<a :href="github" v-if="github" class="text-dark btn btn-light m-2" role="button" title="Depot Github" target="_blank">
					<font-awesome-icon :icon="['fab', 'github']" size="2x" class=""/>
				</a>
				<a :href="gitlab" v-if="gitlab" class="text-dark btn btn-light m-2" role="button" title="Depot Gitlab" target="_blank">
					<font-awesome-icon :icon="['fab', 'gitlab']" size="2x" class=""/>
				</a>	
			</p>
		</div>
		<div class="card bg-light m-3">
			<div class="card-header">
				<strong>tl ; dr</strong>
			</div>
			<div class="card-body">
				<slot name="tldr"></slot>
			</div>
		</div>
		<div class="mt-3">
			<p class="lead">Enoncé complet :</p>
			<slot name="instruction"></slot>
		</div>
	</div>
</template>

<script>

export default {
	props: [
		'url',
		'github',
		'gitlab',
		'bgClassName'
	],
	activated() {
		if (this.bgClassName && window.innerWidth > 768) {
			document.body.classList.add(this.bgClassName);
		}  
    },
    deactivated() {
		if (this.bgClassName) {
			document.body.classList.remove(this.bgClassName);
		}  
    },

}
</script>

<style scoped>

li > ul {
    list-style-type: '- ';
    font-style: italic;
}

</style>