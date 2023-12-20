FROM loadimpact/k6

COPY k6-test/argo-rollouts/test-positif-negatif.js /test-positif-negatif.js

CMD ["run", "/test-positif-negatif.js"]