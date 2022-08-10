//Напиши скрипт проверки подписки при доступе к контенту
//- есть три типа подписки: free, pro, vtp
// - получить доступ могут только пользователи pro, vtp

const sub = 'pro';

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log(`Есть доступ к контенту?`, canAccessContent);