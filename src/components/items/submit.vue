<template>
	<div>
		<transition name="fade">
			<div class="alert alert-danger text-center" role="alert" v-if="error && !isLoading">
				{{ error }}
			</div>
		</transition>
		<button type="submit" class="btn btn-primary" :disabled="isLoading">
			<slot name="text" v-if="!isLoading">
				Envoyer
			</slot>
			<span v-else>
				<font-awesome-icon :icon="['fas', 'hourglass-end']" class="hourglass"/>
				<slot name="loading">Envoi...</slot>
			</span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		error: String,
		isLoading: Boolean,
	}
}
</script>

<style>
    .fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 500ms 500ms;
	}

	.fade-leave-active {
        transition: opacity 500ms;
		opacity: 0;
	}

    .fade-move {
		transition: transform 500ms;
	}

    .hourglass {
        animation: 1.5s linear 0.5s infinite backwards running hourglass-rotation;
        margin-right: 5px;
    }

    @keyframes hourglass-rotation {
        from { transform: rotate(0); }
        25% { transform: rotate(45deg); }
        50% { transform: rotate(90deg); }
        75% { transform: rotate(135deg); }
        90% { transform: rotate(180deg); }
        to { transform: rotate(180deg); }
    }
</style>