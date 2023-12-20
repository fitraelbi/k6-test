FROM loadimpact/k6

COPY argo-rollouts/test-positif-negatif.js /test-positif-negatif.js

CMD ["run", "/test-positif-negatif.js"]