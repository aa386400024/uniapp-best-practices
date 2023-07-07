<template>
	<view>
		<button @click="login">login</button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app'
	import { useRouter } from 'uni-mini-router';

	let uniIdRedirectUrl = ref<string>('');
	const router = useRouter();
	console.log(router, 'router');
	const login = async () => {
		// 在这里执行你的登录操作，在登录成功的回调函数中，如果 uniIdRedirectUrl 有值，跳转到该 URL。
		// 假设你的登录函数为 loginFunc，代码可能会像这样：

		// const { data, error } = await loginFunc();

		if (uniIdRedirectUrl.value) {
			uni.redirectTo({
				url: uniIdRedirectUrl.value
			});
		}
	}
	onLoad((option) => {
		if (option) {
			uniIdRedirectUrl.value = decodeURIComponent(option.uniIdRedirectUrl || '')
		}
	})
</script>