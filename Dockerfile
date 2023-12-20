FROM grafana/xk6

COPY argo-rollouts/test-positif-negatif.js /

CMD ["xk6", "run", "/test-positif-negatif.js"]