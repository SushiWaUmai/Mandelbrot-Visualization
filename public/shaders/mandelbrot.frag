#version 300 es
 
precision highp float;

uniform sampler2D _tex;
uniform float _scale;
uniform vec2 _screenSize;
uniform float _iterations;
uniform vec2 _center;

out vec4 outColor;

void main(void) {
    float xOffset = (_screenSize.x - _screenSize.y) / _screenSize.y;
    float x = (gl_FragCoord.x / _screenSize.y - 0.5) * 2.0 - xOffset;
    float y = (gl_FragCoord.y / _screenSize.y - 0.5) * 2.0;

    vec2 r = vec2(0, 0);
    vec2 c = vec2(x * _scale, y * _scale) + _center;

    float i = 0.0;

    for(; r.x * r.x + r.y * r.y <= 4.0 && i < _iterations; i++)
    {
        r = vec2(r.x * r.x - r.y * r.y, 2.0 * r.x * r.y) + c;
    }

    i += log(log2(sqrt(r.x * r.x + r.y * r.y)));

    outColor = texture(_tex, vec2(i / _iterations, 0.5));  
}
