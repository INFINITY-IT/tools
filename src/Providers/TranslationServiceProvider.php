<?php

namespace InfinityIt\Tools\Providers;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

/**
 * @link https://dev.to/4unkur/how-to-use-laravel-translations-in-js-vue-files-ia
 */
class TranslationServiceProvider extends ServiceProvider
{
	/**
	 * Bootstrap the application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		Cache::rememberForever('translations', function () {
			$translations = collect();
			$locales = config('app.locales');
			if (!is_array($locales))
				throw new \Exception('app.locales must be defined and must be an array');
			foreach (config('app.locales') as $locale) { // suported locales
				$translations[$locale] = [
					#'php' => $this->phpTranslations($locale),
					'json' => $this->jsonTranslations($locale),
				];
			}
			return $translations;
		});
	}

	/**
	 * @param $locale
	 * @return array|mixed
	 */
	private function jsonTranslations($locale): mixed
	{
		$path = resource_path("lang/$locale.json");
		$path2 = base_path("lang/$locale.json");
		if (is_string($path2) && is_readable($path2)) {
			return json_decode(file_get_contents($path2), true);
		} elseif (is_string($path) && is_readable($path)) {
			return json_decode(file_get_contents($path), true);
		}
		return [];
	}

	/**
	 * @param $locale
	 * @return Collection
	 */
	private function phpTranslations($locale): Collection
	{
		$path = resource_path("lang/$locale");
		$path2 = base_path("lang/$locale");
		if (is_string($path2) && is_readable($path2))
			return collect(File::allFiles($path2))->flatMap(function ($file) use ($locale) {
				$key = ($translation = $file->getBasename('.php'));
				return [$key => trans($translation, [], $locale)];
			});
		elseif (is_string($path) && is_readable($path))
			return collect(File::allFiles($path))->flatMap(function ($file) use ($locale) {
				$key = ($translation = $file->getBasename('.php'));
				return [$key => trans($translation, [], $locale)];
			});
	}
}
