FROM loadimpact/k6

COPY argo-rollouts/positif-test3.js /test-positif.js

CMD ["run", "/test-positif.js"]