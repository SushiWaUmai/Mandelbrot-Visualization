vec3 HUEtoRGB(float H);
vec3 HSVtoRGB(vec3 HSV);

void main(void) {

    float x = gl_FragCoord.x - 500.0 / 2.0;
    float y = gl_FragCoord.y - 500.0 / 2.0;

    vec2 r = vec2(0, 0);
    vec2 c = vec2(x, y);

    float i = 0.0;
    float iterations = 500.0;

    while (r.x * r.x + r.y * r.y <= 4.0 && i < iterations)
    {
        r = vec2(r.x * r.x - r.y * r.y, 2.0 * r.x * r.y) + c;
        i++;
    }

    i += log(log2(sqrt(r.x * r.x + r.y * r.y)));

    gl_FragColor = vec4(HSVtoRGB(vec3(i / iterations, 1, i < iterations ? 0.75 : 0.0)), 1.0);
}

vec3 HUEtoRGB(float H)
{
    float R = abs(H * 6.0 - 3.0) - 1.0;
    float G = 2.0 - abs(H * 6.0 - 2.0);
    float B = 2.0 - abs(H * 6.0 - 4.0);
    return saturate(vec3(R, G, B));
}

vec3 HSVtoRGB(vec3 HSV)
{
    vec3 RGB = HUEtoRGB(HSV.x);
    return ((RGB - 1.0) * HSV.y + 1.0) * HSV.z;
}