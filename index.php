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
                'id' => function () {
                    return $this->model()->id();
                },
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
    ],
    'api' => [
        'routes' => [
            [
                'pattern' => 'flokosiol/translations/delete',
                'method'  => 'POST',
                'action'  => function () {
                    $id = get('id');
                    $languageCode = get('languageCode');
                    return [
                        'code' => 200,
                        'status' => $languageCode . ' deleted.'
                    ];
                }
            ],
            [
                'pattern' => 'flokosiol/translations/revert',
                'method'  => 'POST',
                'action'  => function () {
                    $id = get('id');
                    $languageCode = get('languageCode');
                    return [
                        'code' => 200,
                        'status' => $languageCode . ' reverted.'
                    ];
                }
            ]
        ],
    ]
]);