#version 300 es
 
precision highp float;

in vec2 screenSize;
in float scale;
in float iterations;
in vec2 center;

out vec4 outColor;

vec3 HUEtoRGB(float H);
vec3 HSVtoRGB(vec3 HSV);

void main(void) {
    float xOffset = (screenSize.x - screenSize.y) / screenSize.y;
    float x = (gl_FragCoord.x / screenSize.y - 0.5) * 2.0 - xOffset;
    float y = (gl_FragCoord.y / screenSize.y - 0.5) * 2.0;

    vec2 r = vec2(0, 0);
    vec2 c = vec2(x * scale, y * scale) + center;

    float i = 0.0;

    while (r.x * r.x + r.y * r.y <= 4.0 && i < iterations)
    {
        r = vec2(r.x * r.x - r.y * r.y, 2.0 * r.x * r.y) + c;
        i++;
    }

    i += log(log2(sqrt(r.x * r.x + r.y * r.y)));

    outColor = vec4(HSVtoRGB(vec3(i / iterations, 1, i < iterations ? 0.75 : 0.0)), 1.0);
}

vec3 HUEtoRGB(float H)
{
    float R = abs(H * 6.0 - 3.0) - 1.0;
    float G = 2.0 - abs(H * 6.0 - 2.0);
    float B = 2.0 - abs(H * 6.0 - 4.0);
    return clamp(vec3(R, G, B), 0.0, 1.0);
}

vec3 HSVtoRGB(vec3 HSV)
{
    vec3 RGB = HUEtoRGB(HSV.x);
    return ((RGB - 1.0) * HSV.y + 1.0) * HSV.z;
}