const fragmentShader = `
void main() {
  vec3 color = vec3(0.4, 0.4, 0.66);
  gl_FragColor = vec4(color, 1.0);
}
`

export default fragmentShader
