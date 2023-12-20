FROM grafana/xk6

COPY argo-rollouts/test-positif-negatif.js /

CMD ["k6", "run", "/test-positif-negatif.js"]