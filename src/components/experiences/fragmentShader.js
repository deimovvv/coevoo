const fragmentShader = `
void main() {
  vec3 color = vec3(.34, 0.3, 0.66);
  gl_FragColor = vec4(color, 1.0);
}
`

export default fragmentShader
