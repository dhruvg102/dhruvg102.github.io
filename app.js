import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from 'C:/Users/dhruv/OneDrive/Documents/GitHub/dhruvg102.github.io/libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

        window.addEventListener('resize', this.resize.bind(this) );
	}

    resize(){

    }

	render( ) {

    }
}

export { App };
