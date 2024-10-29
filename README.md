<p align="center">
    <h1>Tools</h1>
</p>

### 1. Installation

```sh
composer require "infinity-it/tools"
```

### 2. required packages

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

### 3. usage

```javascript
import { /* ... */} from 'tools'
```

### 4. route

```php
use \App\Http\Middleware\VerifyCsrfToken;
Route::post('refreshToken', 'refreshToken')->withoutMiddleware(VerifyCsrfToken::class)->name('refreshToken');
```

### 5. app translate

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

- **Provider**
  - **Laravel 10** and below: `config/app.php`
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
  - **Laravel 11** and above : `bootstrap/providers.php`
    ```php
    return [
        ...
        InfinityIt\Tools\Providers\TranslationServiceProvider::class,
    ];
    ```
