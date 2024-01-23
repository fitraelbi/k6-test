FROM loadimpact/k6

COPY argo-rollouts/negatif.js /test-negatif.js

CMD ["run", "/test-negatif.js"]