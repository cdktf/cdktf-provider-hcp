# `vaultSecretsRotatingSecret` Submodule <a name="`vaultSecretsRotatingSecret` Submodule" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsRotatingSecret <a name="VaultSecretsRotatingSecret" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecret(scope Construct, id *string, config VaultSecretsRotatingSecretConfig) VaultSecretsRotatingSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig">VaultSecretsRotatingSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig">VaultSecretsRotatingSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys">PutAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAzureApplicationPassword">PutAzureApplicationPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putConfluentServiceAccount">PutConfluentServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey">PutGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser">PutMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey">PutTwilioApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys">ResetAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAzureApplicationPassword">ResetAzureApplicationPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetConfluentServiceAccount">ResetConfluentServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey">ResetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser">ResetMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey">ResetTwilioApiKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsAccessKeys` <a name="PutAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys"></a>

```go
func PutAwsAccessKeys(value VaultSecretsRotatingSecretAwsAccessKeys)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

---

##### `PutAzureApplicationPassword` <a name="PutAzureApplicationPassword" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAzureApplicationPassword"></a>

```go
func PutAzureApplicationPassword(value VaultSecretsRotatingSecretAzureApplicationPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAzureApplicationPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword">VaultSecretsRotatingSecretAzureApplicationPassword</a>

---

##### `PutConfluentServiceAccount` <a name="PutConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putConfluentServiceAccount"></a>

```go
func PutConfluentServiceAccount(value VaultSecretsRotatingSecretConfluentServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putConfluentServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a>

---

##### `PutGcpServiceAccountKey` <a name="PutGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey"></a>

```go
func PutGcpServiceAccountKey(value VaultSecretsRotatingSecretGcpServiceAccountKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

---

##### `PutMongodbAtlasUser` <a name="PutMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser"></a>

```go
func PutMongodbAtlasUser(value VaultSecretsRotatingSecretMongodbAtlasUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

---

##### `PutTwilioApiKey` <a name="PutTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey"></a>

```go
func PutTwilioApiKey(value VaultSecretsRotatingSecretTwilioApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

---

##### `ResetAwsAccessKeys` <a name="ResetAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys"></a>

```go
func ResetAwsAccessKeys()
```

##### `ResetAzureApplicationPassword` <a name="ResetAzureApplicationPassword" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAzureApplicationPassword"></a>

```go
func ResetAzureApplicationPassword()
```

##### `ResetConfluentServiceAccount` <a name="ResetConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetConfluentServiceAccount"></a>

```go
func ResetConfluentServiceAccount()
```

##### `ResetGcpServiceAccountKey` <a name="ResetGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey"></a>

```go
func ResetGcpServiceAccountKey()
```

##### `ResetMongodbAtlasUser` <a name="ResetMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser"></a>

```go
func ResetMongodbAtlasUser()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTwilioApiKey` <a name="ResetTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey"></a>

```go
func ResetTwilioApiKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.VaultSecretsRotatingSecret_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.VaultSecretsRotatingSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.VaultSecretsRotatingSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.VaultSecretsRotatingSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsRotatingSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsRotatingSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsRotatingSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys">AwsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.azureApplicationPassword">AzureApplicationPassword</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference">VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccount">ConfluentServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference">VaultSecretsRotatingSecretConfluentServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser">MongodbAtlasUser</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey">TwilioApiKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput">AppNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput">AwsAccessKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.azureApplicationPasswordInput">AzureApplicationPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccountInput">ConfluentServiceAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput">GcpServiceAccountKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput">IntegrationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput">MongodbAtlasUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput">RotationPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput">SecretProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput">TwilioApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName">IntegrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName">RotationPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider">SecretProvider</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccessKeys`<sup>Required</sup> <a name="AwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys"></a>

```go
func AwsAccessKeys() VaultSecretsRotatingSecretAwsAccessKeysOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a>

---

##### `AzureApplicationPassword`<sup>Required</sup> <a name="AzureApplicationPassword" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.azureApplicationPassword"></a>

```go
func AzureApplicationPassword() VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference">VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference</a>

---

##### `ConfluentServiceAccount`<sup>Required</sup> <a name="ConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccount"></a>

```go
func ConfluentServiceAccount() VaultSecretsRotatingSecretConfluentServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference">VaultSecretsRotatingSecretConfluentServiceAccountOutputReference</a>

---

##### `GcpServiceAccountKey`<sup>Required</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey"></a>

```go
func GcpServiceAccountKey() VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a>

---

##### `MongodbAtlasUser`<sup>Required</sup> <a name="MongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser"></a>

```go
func MongodbAtlasUser() VaultSecretsRotatingSecretMongodbAtlasUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `TwilioApiKey`<sup>Required</sup> <a name="TwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey"></a>

```go
func TwilioApiKey() VaultSecretsRotatingSecretTwilioApiKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a>

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput"></a>

```go
func AppNameInput() *string
```

- *Type:* *string

---

##### `AwsAccessKeysInput`<sup>Optional</sup> <a name="AwsAccessKeysInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput"></a>

```go
func AwsAccessKeysInput() interface{}
```

- *Type:* interface{}

---

##### `AzureApplicationPasswordInput`<sup>Optional</sup> <a name="AzureApplicationPasswordInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.azureApplicationPasswordInput"></a>

```go
func AzureApplicationPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `ConfluentServiceAccountInput`<sup>Optional</sup> <a name="ConfluentServiceAccountInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccountInput"></a>

```go
func ConfluentServiceAccountInput() interface{}
```

- *Type:* interface{}

---

##### `GcpServiceAccountKeyInput`<sup>Optional</sup> <a name="GcpServiceAccountKeyInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput"></a>

```go
func GcpServiceAccountKeyInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationNameInput`<sup>Optional</sup> <a name="IntegrationNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput"></a>

```go
func IntegrationNameInput() *string
```

- *Type:* *string

---

##### `MongodbAtlasUserInput`<sup>Optional</sup> <a name="MongodbAtlasUserInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput"></a>

```go
func MongodbAtlasUserInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RotationPolicyNameInput`<sup>Optional</sup> <a name="RotationPolicyNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput"></a>

```go
func RotationPolicyNameInput() *string
```

- *Type:* *string

---

##### `SecretProviderInput`<sup>Optional</sup> <a name="SecretProviderInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput"></a>

```go
func SecretProviderInput() *string
```

- *Type:* *string

---

##### `TwilioApiKeyInput`<sup>Optional</sup> <a name="TwilioApiKeyInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput"></a>

```go
func TwilioApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName"></a>

```go
func IntegrationName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RotationPolicyName`<sup>Required</sup> <a name="RotationPolicyName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName"></a>

```go
func RotationPolicyName() *string
```

- *Type:* *string

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider"></a>

```go
func SecretProvider() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsRotatingSecretAwsAccessKeys <a name="VaultSecretsRotatingSecretAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretAwsAccessKeys {
	IamUsername: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername">IamUsername</a></code> | <code>*string</code> | AWS IAM username to rotate the access keys for. |

---

##### `IamUsername`<sup>Required</sup> <a name="IamUsername" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername"></a>

```go
IamUsername *string
```

- *Type:* *string

AWS IAM username to rotate the access keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#iam_username VaultSecretsRotatingSecret#iam_username}

---

### VaultSecretsRotatingSecretAzureApplicationPassword <a name="VaultSecretsRotatingSecretAzureApplicationPassword" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretAzureApplicationPassword {
	AppClientId: *string,
	AppObjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword.property.appClientId">AppClientId</a></code> | <code>*string</code> | Application client ID to rotate the application password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword.property.appObjectId">AppObjectId</a></code> | <code>*string</code> | Application object ID to rotate the application password for. |

---

##### `AppClientId`<sup>Required</sup> <a name="AppClientId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword.property.appClientId"></a>

```go
AppClientId *string
```

- *Type:* *string

Application client ID to rotate the application password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#app_client_id VaultSecretsRotatingSecret#app_client_id}

---

##### `AppObjectId`<sup>Required</sup> <a name="AppObjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword.property.appObjectId"></a>

```go
AppObjectId *string
```

- *Type:* *string

Application object ID to rotate the application password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#app_object_id VaultSecretsRotatingSecret#app_object_id}

---

### VaultSecretsRotatingSecretConfig <a name="VaultSecretsRotatingSecretConfig" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppName: *string,
	IntegrationName: *string,
	Name: *string,
	RotationPolicyName: *string,
	SecretProvider: *string,
	AwsAccessKeys: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys,
	AzureApplicationPassword: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword,
	ConfluentServiceAccount: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount,
	GcpServiceAccountKey: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey,
	MongodbAtlasUser: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser,
	ProjectId: *string,
	TwilioApiKey: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName">AppName</a></code> | <code>*string</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName">IntegrationName</a></code> | <code>*string</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName">RotationPolicyName</a></code> | <code>*string</code> | Name of the rotation policy that governs the rotation of the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider">SecretProvider</a></code> | <code>*string</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys">AwsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.azureApplicationPassword">AzureApplicationPassword</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword">VaultSecretsRotatingSecretAzureApplicationPassword</a></code> | Azure configuration to manage the application password rotation for the given application. Required if `secret_provider` is `Azure`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.confluentServiceAccount">ConfluentServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a></code> | Confluent configuration to manage the cloud api key rotation for the given service account. Required if `secret_provider` is `confluent`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser">MongodbAtlasUser</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey">TwilioApiKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName"></a>

```go
AppName *string
```

- *Type:* *string

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#app_name VaultSecretsRotatingSecret#app_name}

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName"></a>

```go
IntegrationName *string
```

- *Type:* *string

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#integration_name VaultSecretsRotatingSecret#integration_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#name VaultSecretsRotatingSecret#name}

---

##### `RotationPolicyName`<sup>Required</sup> <a name="RotationPolicyName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName"></a>

```go
RotationPolicyName *string
```

- *Type:* *string

Name of the rotation policy that governs the rotation of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#rotation_policy_name VaultSecretsRotatingSecret#rotation_policy_name}

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider"></a>

```go
SecretProvider *string
```

- *Type:* *string

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#secret_provider VaultSecretsRotatingSecret#secret_provider}

---

##### `AwsAccessKeys`<sup>Optional</sup> <a name="AwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys"></a>

```go
AwsAccessKeys VaultSecretsRotatingSecretAwsAccessKeys
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#aws_access_keys VaultSecretsRotatingSecret#aws_access_keys}

---

##### `AzureApplicationPassword`<sup>Optional</sup> <a name="AzureApplicationPassword" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.azureApplicationPassword"></a>

```go
AzureApplicationPassword VaultSecretsRotatingSecretAzureApplicationPassword
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPassword">VaultSecretsRotatingSecretAzureApplicationPassword</a>

Azure configuration to manage the application password rotation for the given application. Required if `secret_provider` is `Azure`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#azure_application_password VaultSecretsRotatingSecret#azure_application_password}

---

##### `ConfluentServiceAccount`<sup>Optional</sup> <a name="ConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.confluentServiceAccount"></a>

```go
ConfluentServiceAccount VaultSecretsRotatingSecretConfluentServiceAccount
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a>

Confluent configuration to manage the cloud api key rotation for the given service account. Required if `secret_provider` is `confluent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#confluent_service_account VaultSecretsRotatingSecret#confluent_service_account}

---

##### `GcpServiceAccountKey`<sup>Optional</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey"></a>

```go
GcpServiceAccountKey VaultSecretsRotatingSecretGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#gcp_service_account_key VaultSecretsRotatingSecret#gcp_service_account_key}

---

##### `MongodbAtlasUser`<sup>Optional</sup> <a name="MongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser"></a>

```go
MongodbAtlasUser VaultSecretsRotatingSecretMongodbAtlasUser
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#mongodb_atlas_user VaultSecretsRotatingSecret#mongodb_atlas_user}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `TwilioApiKey`<sup>Optional</sup> <a name="TwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey"></a>

```go
TwilioApiKey VaultSecretsRotatingSecretTwilioApiKey
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#twilio_api_key VaultSecretsRotatingSecret#twilio_api_key}

---

### VaultSecretsRotatingSecretConfluentServiceAccount <a name="VaultSecretsRotatingSecretConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretConfluentServiceAccount {
	ServiceAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | Confluent service account to rotate the cloud api key for. |

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount.property.serviceAccountId"></a>

```go
ServiceAccountId *string
```

- *Type:* *string

Confluent service account to rotate the cloud api key for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#service_account_id VaultSecretsRotatingSecret#service_account_id}

---

### VaultSecretsRotatingSecretGcpServiceAccountKey <a name="VaultSecretsRotatingSecretGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretGcpServiceAccountKey {
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | GCP service account email to impersonate. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#service_account_email VaultSecretsRotatingSecret#service_account_email}

---

### VaultSecretsRotatingSecretMongodbAtlasUser <a name="VaultSecretsRotatingSecretMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretMongodbAtlasUser {
	DatabaseName: *string,
	ProjectId: *string,
	Roles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName">DatabaseName</a></code> | <code>*string</code> | MongoDB Atlas database or cluster name to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId">ProjectId</a></code> | <code>*string</code> | MongoDB Atlas project ID to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles">Roles</a></code> | <code>*[]*string</code> | MongoDB Atlas roles to assign to the rotating user. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

MongoDB Atlas database or cluster name to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#database_name VaultSecretsRotatingSecret#database_name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

MongoDB Atlas project ID to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

MongoDB Atlas roles to assign to the rotating user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_rotating_secret#roles VaultSecretsRotatingSecret#roles}

---

### VaultSecretsRotatingSecretTwilioApiKey <a name="VaultSecretsRotatingSecretTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

&vaultsecretsrotatingsecret.VaultSecretsRotatingSecretTwilioApiKey {

}
```


## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsRotatingSecretAwsAccessKeysOutputReference <a name="VaultSecretsRotatingSecretAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecretAwsAccessKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsRotatingSecretAwsAccessKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput">IamUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername">IamUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamUsernameInput`<sup>Optional</sup> <a name="IamUsernameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput"></a>

```go
func IamUsernameInput() *string
```

- *Type:* *string

---

##### `IamUsername`<sup>Required</sup> <a name="IamUsername" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername"></a>

```go
func IamUsername() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference <a name="VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecretAzureApplicationPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appClientIdInput">AppClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appObjectIdInput">AppObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appClientId">AppClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appObjectId">AppObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppClientIdInput`<sup>Optional</sup> <a name="AppClientIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appClientIdInput"></a>

```go
func AppClientIdInput() *string
```

- *Type:* *string

---

##### `AppObjectIdInput`<sup>Optional</sup> <a name="AppObjectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appObjectIdInput"></a>

```go
func AppObjectIdInput() *string
```

- *Type:* *string

---

##### `AppClientId`<sup>Required</sup> <a name="AppClientId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appClientId"></a>

```go
func AppClientId() *string
```

- *Type:* *string

---

##### `AppObjectId`<sup>Required</sup> <a name="AppObjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.appObjectId"></a>

```go
func AppObjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsRotatingSecretConfluentServiceAccountOutputReference <a name="VaultSecretsRotatingSecretConfluentServiceAccountOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecretConfluentServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsRotatingSecretConfluentServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountIdInput"></a>

```go
func ServiceAccountIdInput() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference <a name="VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsRotatingSecretMongodbAtlasUserOutputReference <a name="VaultSecretsRotatingSecretMongodbAtlasUserOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecretMongodbAtlasUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsRotatingSecretMongodbAtlasUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsRotatingSecretTwilioApiKeyOutputReference <a name="VaultSecretsRotatingSecretTwilioApiKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsrotatingsecret"

vaultsecretsrotatingsecret.NewVaultSecretsRotatingSecretTwilioApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsRotatingSecretTwilioApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



