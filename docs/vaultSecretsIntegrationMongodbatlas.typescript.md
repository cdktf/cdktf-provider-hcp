# `vaultSecretsIntegrationMongodbatlas` Submodule <a name="`vaultSecretsIntegrationMongodbatlas` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationMongodbatlas <a name="VaultSecretsIntegrationMongodbatlas" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas hcp_vault_secrets_integration_mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas(scope: Construct, id: string, config: VaultSecretsIntegrationMongodbatlasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig">VaultSecretsIntegrationMongodbatlasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig">VaultSecretsIntegrationMongodbatlasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails">putStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetStaticCredentialDetails">resetStaticCredentialDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticCredentialDetails` <a name="putStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails"></a>

```typescript
public putStaticCredentialDetails(value: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetStaticCredentialDetails` <a name="resetStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetStaticCredentialDetails"></a>

```typescript
public resetStaticCredentialDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsIntegrationMongodbatlas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsIntegrationMongodbatlas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationMongodbatlas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference">VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetailsInput">staticCredentialDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `staticCredentialDetails`<sup>Required</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetails"></a>

```typescript
public readonly staticCredentialDetails: VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference">VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `staticCredentialDetailsInput`<sup>Optional</sup> <a name="staticCredentialDetailsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetailsInput"></a>

```typescript
public readonly staticCredentialDetailsInput: IResolvable | VaultSecretsIntegrationMongodbatlasStaticCredentialDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationMongodbatlasConfig <a name="VaultSecretsIntegrationMongodbatlasConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.Initializer"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationMongodbatlasConfig: vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.name">name</a></code> | <code>string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.projectId">projectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | MongoDB Atlas API key used to authenticate against the target project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#capabilities VaultSecretsIntegrationMongodbatlas#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#name VaultSecretsIntegrationMongodbatlas#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#project_id VaultSecretsIntegrationMongodbatlas#project_id}

---

##### `staticCredentialDetails`<sup>Optional</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.staticCredentialDetails"></a>

```typescript
public readonly staticCredentialDetails: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#static_credential_details VaultSecretsIntegrationMongodbatlas#static_credential_details}

---

### VaultSecretsIntegrationMongodbatlasStaticCredentialDetails <a name="VaultSecretsIntegrationMongodbatlasStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.Initializer"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationMongodbatlasStaticCredentialDetails: vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPrivateKey">apiPrivateKey</a></code> | <code>string</code> | Private key used alongside the public key to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPublicKey">apiPublicKey</a></code> | <code>string</code> | Public key used alongside the private key to authenticate against the target project. |

---

##### `apiPrivateKey`<sup>Required</sup> <a name="apiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPrivateKey"></a>

```typescript
public readonly apiPrivateKey: string;
```

- *Type:* string

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#api_private_key VaultSecretsIntegrationMongodbatlas#api_private_key}

---

##### `apiPublicKey`<sup>Required</sup> <a name="apiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPublicKey"></a>

```typescript
public readonly apiPublicKey: string;
```

- *Type:* string

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_mongodbatlas#api_public_key VaultSecretsIntegrationMongodbatlas#api_public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegrationMongodbatlas } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKeyInput">apiPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKeyInput">apiPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKey">apiPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKey">apiPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiPrivateKeyInput`<sup>Optional</sup> <a name="apiPrivateKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKeyInput"></a>

```typescript
public readonly apiPrivateKeyInput: string;
```

- *Type:* string

---

##### `apiPublicKeyInput`<sup>Optional</sup> <a name="apiPublicKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKeyInput"></a>

```typescript
public readonly apiPublicKeyInput: string;
```

- *Type:* string

---

##### `apiPrivateKey`<sup>Required</sup> <a name="apiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKey"></a>

```typescript
public readonly apiPrivateKey: string;
```

- *Type:* string

---

##### `apiPublicKey`<sup>Required</sup> <a name="apiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKey"></a>

```typescript
public readonly apiPublicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationMongodbatlasStaticCredentialDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---



