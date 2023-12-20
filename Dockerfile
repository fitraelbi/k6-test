FROM loadimpact/k6

COPY wallex/test-positif.js /test-positif.js

CMD ["run", "/test-positif.js"]