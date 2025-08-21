const vertexShader = `
uniform sampler2D uPositions; // Textura con las posiciones de las partículas
uniform float uTime;         // Tiempo para animaciones

void main() {
  // Obtener la posición de la partícula desde la textura
  vec3 pos = texture2D(uPositions, position.xy).xyz;

  // Animación opcional: Oscilación en el eje Z basada en el tiempo
  pos.z += sin(uTime + position.x * 10.0) * 0.1;

  // Transformar la posición al espacio de la pantalla
  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  // Calcular el tamaño del punto
  gl_PointSize = 2.5;

  // Atenuación del tamaño basada en la distancia al espectador
  gl_PointSize *= (1.0 / -viewPosition.z);

  // Ajuste adicional del tamaño basado en la posición X
  gl_PointSize *= step(1.0 - (1.0 / 64.0), position.x) + 0.5;
}
`;

export default vertexShader;