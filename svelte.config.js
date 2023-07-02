import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	// plugin options
  vitePlugin: {
    exclude: [],

    // DX options
    inspector: {
      toggleKeyCombo: 'meta-shift',
      holdMode: false,
      showToggleButton: 'never', //always
      //toggleButtonPos: 'bottom-left'
    }

  }
};

export default config;
