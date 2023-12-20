FROM grafana/xk6

RUN mkdir /app

WORKDIR /app

COPY argo-rollouts/test-positif-negatif.js /app

CMD ["k6", "/app/test-positif-negatif.js"]