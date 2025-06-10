---
sidebar_position: 3
title: How to use Kuda
description: Provides examples on how to use N1netails Kuda in your Java application.
---

## Use
Use the kuda tail methods to send alerts.

### Java

```java
import com.n1netails.n1netails.kuda.api.Tail;
import com.n1netails.n1netails.kuda.internal.TailConfig;

public class ExampleService {
    
    public ExampleService() {
        // You can configure this anywhere must be set once.
        TailConfig.setApiUrl("http://localhost:9901");
        TailConfig.setN1neToken("79dd8985-2d85-4a22-bfa0-0d70e963d713");
    }
    
    public void myRandomMethod() {
        try {
            this.doSomeLogic();
            Tail.success("Testing kuda success").send();
        } catch (Exception ex) {
            Tail.error("Testing kuda error").withTag("env", "prod").send();
        }
    }
    
    public void otherN1neTailNotes() {
        // Here are the other methods that can be used to provide more kuda details.

        /////////////////
        // INFO
        ////////////////
        Tail.info("Testing kuda info").send();
        Tail.info("Testing kuda info1").withTag("env", "prod").send();
        Tail.info("Testing kuda info2").description("Extra description on the tail if needed").send();
        Tail.info("Testing kuda info3").details("extra log stack details").send();
        Tail.info("Testing kuda info4").type("SYSTEM_ALERT").send();
        
        // utilizing all methods
        Map<String, String> tags = new HashMap<>();
        tags.put("env", "prod");
        tags.put("test", "info");
        tags.put("n1ne", "tails-info");
        Tail.info("Testing kuda info5")
                .description("Extra description on the tail if needed")
                .details("extra log stack details")
                .type("SYSTEM_ALERT")
                .withTags(tags).send();

        /////////////////
        // SUCCESS
        /////////////////
        Tail.success("Testing kuda success").send();
        Tail.success("Testing kuda success1").withTag("env", "prod").send();
        Tail.success("Testing kuda success2").description("Extra description on the tail if needed").send();
        Tail.success("Testing kuda success3").details("extra log stack details").send();
        Tail.success("Testing kuda success4").type("SYSTEM_ALERT").send();

        // utilizing all methods
        Map<String, String> tags = new HashMap<>();
        tags.put("env", "prod");
        tags.put("test", "success");
        tags.put("n1ne", "tails-success");
        Tail.success("Testing kuda success5")
                .description("Extra description on the tail if needed")
                .details("extra log stack details")
                .type("SYSTEM_ALERT")
                .withTags(tags).send();

        /////////////////
        // WARN
        /////////////////
        Tail.warn("Testing kuda warn").send();
        Tail.warn("Testing kuda warn1").withTag("env", "prod").send();
        Tail.warn("Testing kuda warn2").description("Extra description on the tail if needed").send();
        Tail.warn("Testing kuda warn3").details("extra log stack details").send();
        Tail.warn("Testing kuda warn4").type("SYSTEM_ALERT").send();

        // utilizing all methods
        Map<String, String> tags = new HashMap<>();
        tags.put("env", "prod");
        tags.put("test", "warn");
        tags.put("n1ne", "tails-warn");
        Tail.warn("Testing kuda warn5")
                .description("Extra description on the tail if needed")
                .details("extra log stack details")
                .type("SYSTEM_ALERT")
                .withTags(tags).send();

        /////////////////
        // ERROR
        /////////////////
        Tail.error("Testing kuda error").send();
        Tail.error("Testing kuda error1").withTag("env", "prod").send();
        Tail.error("Testing kuda error2").description("Extra description on the tail if needed").send();
        Tail.error("Testing kuda error3").details("extra log stack details").send();
        Tail.error("Testing kuda error4").type("SYSTEM_ALERT").send();

        Map<String, String> tags = new HashMap<>();
        tags.put("env", "prod");
        tags.put("test", "error");
        tags.put("n1ne", "tails-error");
        Tail.error("Testing kuda error5")
                .description("Extra description on the tail if needed")
                .details("extra log stack details")
                .type("SYSTEM_ALERT")
                .withTags(tags).send();

        /////////////////
        // CRITICAL
        /////////////////
        Tail.critical("Testing kuda critical").send();
        Tail.critical("Testing kuda critical1").withTag("env", "prod").send();
        Tail.critical("Testing kuda critical2").description("Extra description on the tail if needed").send();
        Tail.critical("Testing kuda critical3").details("extra log stack details").send();
        Tail.critical("Testing kuda critical4").type("SYSTEM_ALERT").send();

        Map<String, String> tags = new HashMap<>();
        tags.put("env", "prod");
        tags.put("test", "critical");
        tags.put("n1ne", "tails-critical");
        Tail.critical("Testing kuda critical5")
                .description("Extra description on the tail if needed")
                .details("extra log stack details")
                .type("SYSTEM_ALERT")
                .withTags(tags).send();

        /////////////////
        // KUDA
        // Send message with your own custom level (replace "MY_KUDA_LEVEL" with the level you want to create)
        /////////////////
        Tail.kuda("MY_KUDA_LEVEL", "Testing kuda").send();
        Tail.kuda("MY_KUDA_LEVEL", "Testing kuda1").withTag("env", "prod").send();
        Tail.kuda("MY_KUDA_LEVEL", "Testing kuda2").description("Extra description on the tail if needed").send();
        Tail.kuda("MY_KUDA_LEVEL", "Testing kuda3").details("extra log stack details").send();
        Tail.kuda("MY_KUDA_LEVEL", "Testing kuda4").type("SYSTEM_ALERT").send();

        Map<String, String> tags = new HashMap<>();
        tags.put("env", "prod");
        tags.put("test", "kuda");
        tags.put("n1ne", "tails-kuda");
        Tail.kuda("MY_KUDA_LEVEL", "Testing kuda5")
                .description("Extra description on the tail if needed")
                .details("extra log stack details")
                .type("SYSTEM_ALERT")
                .withTags(tags).send();
    }
}

```