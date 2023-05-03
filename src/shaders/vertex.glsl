
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;


void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;

    vec3 hola = vPosition * 1.0;

    
   
    gl_Position = projectionMatrix * modelViewMatrix * vec4(hola , 1.0 );
}