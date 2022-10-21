FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/snoople-app.jar snoople-app.jar

CMD ["sh", "-c", "java -DServer.port=$PORT -jar /snoople-app.jar"]