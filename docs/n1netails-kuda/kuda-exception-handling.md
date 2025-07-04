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
        TailConfig.setN1neToken("79dd8985-2d85-4a22-bfa0-0d70e963d713");
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