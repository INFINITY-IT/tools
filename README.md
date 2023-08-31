<p align="center">
    <h1>Tools</h1>
</p>

### 1. composer.json

```json
{
    "repositories": [
        {
            "type": "vcs",
            "url": "git@github.com:INFINITY-IT/tools.git",
            "or url": "https://username:token@github.com/infinity-it/tools.git"
        }
    ]
}
```

### 2. Installation

```sh
composer require "infinity-it/tools"
```

### 3. required packages

- package.json
    ```json
    {
      "dependencies": {
        "tools": "file:vendor/infinity-it/tools"
      }
    }
    ```
- run

  ```shell
  npm i
  ```

### 4. usage

```javascript
import { /* ... */ } from 'tools'
```

### 5. route

```php
use \App\Http\Middleware\VerifyCsrfToken;
Route::post('refreshToken', 'refreshToken')->withoutMiddleware(VerifyCsrfToken::class)->name('refreshToken');
```

### 6. app translate

- app.blade.php

```blade

<head>
  <script>
    window._locale = '{{ app()->getLocale() }}'
    window._translations = {!! cache('translations') !!};
  </script>
</head>
```

- app.js

```javascript
import {__, trans} from 'tools'
```

- config/app.php

```php
'providers' => [
    ...
    /*
    * Package Service Providers...
    */
    InfinityIt\Tools\Providers\TranslationServiceProvider::class,
    ...
]
```
