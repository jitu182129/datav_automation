# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - heading "Hey there! Ready to dive in?" [level=1] [ref=e6]
      - paragraph [ref=e7]: Your Dashboard is waiting for you! Enter your credentials to continue.
      - img "Welcome illustration" [ref=e9]
    - generic [ref=e16]:
      - generic [ref=e17]:
        - link "DataV Logo" [ref=e18] [cursor=pointer]:
          - /url: index.html
          - img "DataV Logo" [ref=e19]
        - heading "Login" [level=2] [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]:
          - generic [ref=e23]: Email *
          - textbox "Example@email.com" [ref=e26]: datav@skill-mine.com
        - generic [ref=e27]:
          - generic [ref=e28]: Password *
          - generic [ref=e29]:
            - generic [ref=e31]:
              - textbox "At least 8 characters" [active] [ref=e33]: DataV123@
              - button [ref=e34] [cursor=pointer]:
                - img [ref=e35]
            - button [ref=e40] [cursor=pointer]:
              - img [ref=e41]
        - button "Login" [ref=e47] [cursor=pointer]
  - region "Notifications (F8)":
    - list
```