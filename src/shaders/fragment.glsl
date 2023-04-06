uniform float time;
uniform float uDisplacement;

varying float pulse;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;


 
 // NOISE FUNCTION   

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}


float line(vec2 uv, float offset){
    return smoothstep(
        0.,0.02 + offset*0.6,
        abs(0.5*(sin(uv.x*10.) + offset*2.))
    );
}


vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}



void main() {
    // gl_FragColor = vec4(0.,0.,1., 1.);


    /* vec4 myimage = texture(
        uTexture,
        vUv + 0.01*sin(vUv*20. + time) 
    ); */

    vec3 color1 = vec3(.3,0.3,0.3);
    vec3 color2 = vec3(0.4,0.4,0.4);
    vec3 color3 = vec3(1.1);

      /* vec3 color1 = vec3(.4,.3,0.14);
    vec3 color2 = vec3(.01, 0.1, 0.1);
    vec3 color3 = vec3(0.244,0.3,0.5); */
 /* 
    vec3 color1 = vec3(0.5,0.4,0.54);
    vec3 color2 = vec3(0.11,0.2,0.21);
    vec3 color3 = vec3(0.244,0.5,0.49); */

    

    float n = noise(vPosition + time*0.05);
    vec2 baseUV = rotate(vec2(n*.05), n*20.2)*vPosition.xy*n;
    
    float bPattern = line(baseUV, .5);
    /* float sPattern = line(baseUV, 0.5)*n*2. ; */
    float sPattern = line(baseUV, .02)*n*5.2 ;


    vec3 baseColor = mix(color1, color3, bPattern*2.);
    vec3 sbaseColor = mix(baseColor, color2, sPattern) * n *1.2;



    

    gl_FragColor = vec4( vec3(sbaseColor) ,1.);


    
}

