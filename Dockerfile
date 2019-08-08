FROM loadimpact/k6 as k6

FROM aroq/toolbox

COPY --from=k6 /usr/bin/k6 /usr/bin/k6
