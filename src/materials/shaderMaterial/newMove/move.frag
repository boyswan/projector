precision mediump float;
precision mediump int;

uniform float time;
uniform vec2 mouse;

varying vec3 vPosition;
varying vec3 vColor;

void main()	{

	float mouseAverage = (mouse.y * 0.0005) * (mouse.y * 0.0005);
	vec4 color = vec4( vColor, mouseAverage );

	color.r += mouseAverage * 0.15;
	color.b += sin( vPosition.x * 5.0 + time ) * 0.5;


	gl_FragColor = color;

}
