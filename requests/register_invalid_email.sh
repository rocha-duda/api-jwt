echo "=== TESTE: Registrar com E-MAIL INVÁLIDO ==="
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Usuario Teste", "email": "email-invalido", "password": "Senha@123"}'
echo ""