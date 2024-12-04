started this to make sense of how the model classes are connected.

as both Group and User can be the owner of various things, theres a 
hidden common supertype ("Duck Type") "Owner", I added it here for clarity.

```mermaid

classDiagram

    Feed *-- Screen
    Feed *-- Owner: owner
    Feed *-- Feed :parent
    Template *-- Owner: owner
    Screen *-- Owner: owner
    <<DuckType>>Owner
      Group --|> Owner
      User --|> Owner


      Content
      ConcertoConfig
      Feed
      Field
      FieldConfig

      Kind
      Media
      Membership
      Page
      Position
      Screen
      Submission
      Subscription
      
      
      Booking
      ConcertoPlugin
  
    ActiveModelValidator  <|-- GraphicValidator

    

    Content <|-- DynamicContent
    Content <|-- Graphic
    
    Content <|-- TextContent
    Content <|-- ClientTime
    
    TextContent <|-- HtmlText
    TextContent <|-- Ticker

```