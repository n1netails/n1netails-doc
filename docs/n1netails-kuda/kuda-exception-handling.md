---
sidebar_position: 4
title: Kuda Exception Handling
description: Provides examples on handling exceptions and setting up the default exception handler with N1netails Kuda.
---


### Default exception handling
Kuda can also be used to set up a default exception handler with `Tail.report` you can pass throwable exceptions to kuda and it 
will generate a detailed report on the exception.

You can also use `TailConfig.enableExceptionHandler()` to enable kuda as the default uncaught exception handler. This will allow you to capture any uncaught exceptions that you have not identified.

```java
import com.n1netails.n1netails.kuda.api.Tail;
import com.n1netails.n1netails.kuda.internal.TailConfig;

public class ExampleService {
    
    public ExampleService() {
        // You can configure this anywhere must be set once. For localhost use http://localhost:9901
        TailConfig.setApiUrl("https://app.n1netails.com");
        // Example token. You will need to generate your own token using the N1netails Dashboard
        TailConfig.setN1neToken("n1_c7PNos3Nru2NLxVA6ANBbbJZsuJ5g8RVzZJhBpQjz5Hz7qrUB5yloRKjouRU9yzzGpbLhuZAS_ga0HQ_a7dLOQ");
        // enable kuda to handle Default Uncaught Exception Handler (optional)
        TailConfig.enableExceptionHandler();
    }
    
    public void defaultExceptionHandler() {
        // exception handler
        try {
            throw new IllegalArgumentException("User ID was null");
        } catch (Exception e) {
            Tail.report(e); // manually report caught exception
        }
    }

    public void defaultExceptionHandlerWithCustomLevel() {
        // exception handler with custom tail level
        try {
            throw new IllegalArgumentException("CRITICAL - User ID was null");
        } catch (Exception e) {
            Tail.report("CRITICAL", e); // manually report caught exception with custom tail level
        }
    }
    
    public void uncaughtException() {
        // handle uncaught exceptions
        new Thread(() -> {
            throw new RuntimeException("This will trigger the kuda handler");
        }).start();
    }
}

```