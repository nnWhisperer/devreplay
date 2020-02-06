module.exports = [
    {
      condition: [
        'org.xml.sax.AttributeList'
      ],
      consequent: [
        'org.xml.sax.Attributes'
      ],
      description: 'org.xml.sax.AttributeList is deprecated',
      severity: 'E'
    },
    {
      condition: [
        'org.xml.sax.DocumentHandler'
      ],
      consequent: [
        'org.xml.sax.ContentHandler'
      ]
    },
    {
      condition: [
        'org.omg.CORBA.DynAny'
      ],
      consequent: [
        'org.omg.DynamicAny.DynAny'
      ]
    },
    {
      condition: [
        'org.omg.CORBA.DynArray'
      ],
      consequent: [
        'org.omg.DynamicAny.DynArray'
      ]
    },
    {
      condition: [
        'org.omg.CORBA.DynEnum'
      ],
      consequent: [
        'org.omg.DynamicAny.DynEnum'
      ]
    },
    {
      condition: [
        'java.awt.Frame.CROSSHAIR_CURSOR'
      ],
      consequent: [
        'Cursor.CROSSHAIR_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.DEFAULT_CURSOR'
      ],
      consequent: [
        'Cursor.DEFAULT_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.E_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.E_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.HAND_CURSOR'
      ],
      consequent: [
        'Cursor.HAND_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.MOVE_CURSOR'
      ],
      consequent: [
        'Cursor.MOVE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.N_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.N_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.NE_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.NE_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.NW_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.NW_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.S_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.S_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.SE_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.SE_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.SW_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.SW_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.TEXT_CURSOR'
      ],
      consequent: [
        'Cursor.TEXT_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.W_RESIZE_CURSOR'
      ],
      consequent: [
        'Cursor.W_RESIZE_CURSOR'
      ]
    },
    {
      condition: [
        'java.awt.Frame.WAIT_CURSOR'
      ],
      consequent: [
        'Cursor.WAIT_CURSOR'
      ]
    }
  ]