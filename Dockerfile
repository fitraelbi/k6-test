FROM grafana/xk6

RUN mkdir /app

WORKDIR /app

COPY wallex/test-positif.js /app

CMD ["k6", "/app/test-positif.js"]