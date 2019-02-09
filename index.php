<?php

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin('flokosiol/translations', [
    'sections' => [
        'translations' => [
            'props' => [
                'deletable' => function (bool $deletable = true) {
                    return $deletable;
                },
                'revertable' => function (bool $revertable = true) {
                    return $revertable;
                }
            ],
            'computed' => [
                'translations' => function () {
                    $translatedContent = [];
                    if ($translations = $this->model()->translations()) {
                        foreach ($translations as $translation) {
                            if ($translation->exists()) {
                                $translatedContent[] = $translation->code();
                            }
                        }
                    }
                    return $translatedContent;
                }
            ]
        ]
    ]
]);
